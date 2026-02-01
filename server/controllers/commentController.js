import prisma from "../configs/prisma.js";

// ADD COMMENT
export const addComment = async (req, res) => {
  try {
    const { userId } = await req.auth();
    const { taskId, content } = req.body;

    if (!taskId || !content) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        taskId,
        userId,
      },
    });

    res.json({ comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// GET COMMENTS
export const getTaskComments = async (req, res) => {
  try {
    const { taskId } = req.params;

    const comments = await prisma.comment.findMany({
      where: { taskId },
      include: { user: true },
    });

    res.json({ comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
