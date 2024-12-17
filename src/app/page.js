import Image from "next/image";
import styles from "./page.module.css";
import Video from "./components/Video";
export default function Home() {
  return (
    <div>
      <main>
        <Video />
      </main>
    </div>
  );
}
