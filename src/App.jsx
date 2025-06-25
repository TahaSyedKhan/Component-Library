import Avatar from "./Components/Avatar";
import Button from "./Components/Button";

export default function App() {
  return (
    <main>
      <Button>Log in with Google</Button>
      <Button size='sm' variant='success'>Log in with Google</Button>
      <Button size='lg' variant='warning'>Log in with Google</Button>
      <Button size='lg' variant='danger'>Log in with Google</Button>
      <section className="avatar-section">
        <Avatar src="../images/bob.jpg" alt="avatar-image"/>
        <Avatar>BZ</Avatar>
        <Avatar />
      </section>
    </main>
  )
}