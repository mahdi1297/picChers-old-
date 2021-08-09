const {CommentSchema} = require( "./../data-access/schemas/commentsSchema")

const getAllComments = () => {
  return new Promise((resolve, reject) => {
    try {
      CommentSchema.find({}, (error, data) => {
        if (error) reject(error);
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getCommentsBySlug = (blogSlug) => {
  if (!blogSlug) return false;
  return new Promise((resolve, reject) => {
    try {
      CommentSchema.find(
        { blogSlug: blogSlug, isConfirmed: true, isRemoved: false },
        (error, data) => {
          if (error) {
            reject(error);
          }
          resolve(data);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};

const confirmComment = (_id, isConfirmed) => {
  if (!_id) return false;
  return new Promise((resolve, reject) => {
    CommentSchema.findOneAndUpdate(
      { _id: _id },
      { isConfirmed: isConfirmed },
      { new: true },
      (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      }
    );
  });
};

const removeComment = (_id, isRemoved) => {
  if (!_id) return false;
  return new Promise((resolve, reject) => {
    CommentSchema.findOneAndUpdate(
      { _id: _id },
      { isRemoved: isRemoved },
      { new: true },
      (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      }
    );
  });
};

const insertComment = (commentObj) => {
  if (!commentObj) return false;
  return new Promise((resolve, reject) => {
    try {
      CommentSchema(commentObj)
        .save()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports =  {
  removeComment,
  getAllComments,
  insertComment,
  getCommentsBySlug,
  confirmComment,
};
