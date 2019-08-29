export const updateUser = user => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${user.id}`,
        data: { user },
    });
};

export const deleteUser = user => {
    return $.ajax({
        method: "DELETE",
        url: `/api/users/${user.id}`,
        data: { user },
    });
};
