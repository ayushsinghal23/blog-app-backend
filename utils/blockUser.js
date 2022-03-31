const blockUser = user => {
  if (user?.isBlocked) {
    throw new Error(`Sorry You are Blocked`);
  }
};

module.exports = blockUser;
