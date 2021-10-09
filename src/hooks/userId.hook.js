module.exports =
    (options = {}) =>
        async (context) => {
            const { data, params } = context;
            const { user } = params;
            const { title } = data;
            if (!title) {
                throw new Error({ message: "Title is required" });
            }
            const populated = { ...data, userId: user._id };
            context.data = populated;
            return context;
        };
