module.exports =
  (options = {}) =>
  async (context) => {
    const { params } = context;
    const { user, query } = params;
    if (!user?._id) {
      throw new Error("Permission denied");
    }
    const populated = { ...query, userId: user._id };
    context.params.query = populated;
    return context;
  };
