# Write your MySQL query statement below
SELECT e1.name AS Employee
FROM EMPLOYEE e1, EMPLOYEE e2
WHERE e1.salary > e2.salary AND e2.id = e1.managerId;