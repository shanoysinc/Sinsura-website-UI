import styles from "../../styles/companyStories/companyStories.module.scss";
import RightArrow from "../../public/svg/Right-Arrow.svg";

const CompanyStories = () => {
	return (
		<div className={styles.container}>
			<div className={styles.storiesContainer}>
				<img
					src="/svg/user_stories_1.svg"
					alt="user stories"
					className={styles.companyIcon}
				/>
				<img
					src="/svg/user_stories_2.svg"
					alt="user stories"
					className={styles.companyIcon}
				/>
				<img
					src="/svg/user_stories_3.svg"
					alt="user stories"
					className={styles.companyIcon}
				/>
				<img
					src="/svg/user_stories_4.svg"
					alt="user stories"
					className={styles.companyIcon}
				/>
				<img
					src="/svg/user_stories_5.svg"
					alt="user stories"
					className={styles.companyIcon}
				/>
				<img
					src="/svg/user_stories_6.svg"
					alt="user stories"
					className={styles.companyIcon}
				/>
				<img
					src="/svg/user_stories_7.svg"
					alt="user stories"
					className={styles.companyIcon}
				/>
			</div>

			<div className={styles.linkWrapper}>
				<a href="/" className={styles.link}>
					<span>Read our user stories</span>
					<RightArrow height={13} width={14} fill="currentColor" />
				</a>
			</div>
		</div>
	);
};

export default CompanyStories;