import HeadComponent from "../components/HeadComponent/head.component";
import Navbar from "../components/NavbarComponent/navbar.component";

export default function Home() {
  return (
    <>
      <HeadComponent title="MyTodoApp | Home" />
      <Navbar />
    </>
  );
}
