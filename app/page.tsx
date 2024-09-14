import UserList from '../components/userList';
import AddUserForm from '../components/AddUserForm';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">유저 관리 시스템</h1>
      <AddUserForm />
      <UserList />
    </main>
  );
}
