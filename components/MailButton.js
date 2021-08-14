import styles from "../styles/modules/MailButton.module.css";

const MailButton = () => {
  return (
    <div
      className={styles.MailButton}
      onClick={() => {
        navigator.clipboard.writeText("maximilian.hagerf@gmail.com");
      }}
    >
      <span className={styles.Text}>
        maximilian.hagerf@gmail.com
        <i className={styles.TextInside}>CLICK TO COPY</i>
      </span>
      <span className={styles.IconContainer}>
        <i className={styles.Icon}>
          <svg
            className={styles.Svg}
            xmlns="http://www.w3.org/2000/svg"
            width="36.295"
            height="19.281"
            viewBox="0 0 50 20"
          >
            <g
              id="Vector_Smart_Object"
              data-name="Vector Smart Object"
              transform="translate(6 -0.86) scale(1 )"
            >
              <path
                id="Path_3"
                data-name="Path 3"
                d="M3.439,2.532,1.6,1.61V19.39H36.4V1.61L19,10.349Z"
                fill="none"
                stroke="#f5df4d"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <line
                id="Line_1"
                data-name="Line 1"
                x2="34.796"
                transform="translate(1.602 1.61)"
                fill="none"
                stroke="#f5df4d"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </i>
      </span>
    </div>
  );
};

export default MailButton;
