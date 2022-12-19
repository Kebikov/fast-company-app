export function paginate(users, pageSize, currentPage) {
    return users.filter((item, i) => currentPage * pageSize - pageSize <= i && i <= currentPage * pageSize - 1);
}