import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<nav>
				<Link
					href={{
						pathname: "/about",
						query: { name: "test" },
					}}
				>
					{" "}
					about
				</Link>
			</nav>
			<main className={styles.main}>ANUG SAYA</main>;
		</>
	);
}
