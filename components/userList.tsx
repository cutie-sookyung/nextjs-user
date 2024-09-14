'use client';
import { useState, useEffect } from 'react';
import { deleteUser } from '../actions/userActions';
import { User } from '@prisma/client';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">유저 목록</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id} className="mb-2">
            {user.name} ({user.email})
            <button
              onClick={() => handleDelete(user.id)}
              className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
