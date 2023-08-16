import styles from "../../styles/AuthLayout.module.css";
import { ChevronRight } from "lucide-react";

export default function AuthLayout({ children }) {
  return (
    // <>
    <div className={styles.main_bg}>
      {/* <div className="flex h-screen bg-slate-200 overflow-hidden">  */}
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>
        <div className="right flex flex-col overflow-hidden">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}

//og code

// export default function AuthLayout({ children }) {
//   return (
//     // <>
//     <div className={styles.main_bg}>
//       {/* <div className="flex h-screen bg-slate-200 overflow-hidden">  */}
//       <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
//         <div className={styles.imgStyle}>
//           <div className={styles.cartoonImg}></div>
//           <div className={styles.cloud_one}></div>
//           <div className={styles.cloud_two}></div>
//         </div>
//         <div className="right flex flex-col overflow-hidden">
//           <div className="text-center py-10">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// }


//og code 

//   <div className={styles.main_section}>
//     <div className={styles.main_box}>
//       <div className={styles.left_box}>
//         <div className={styles.cartoonImg}></div>
//         <div className={styles.cloud_one}></div>
//         <div className={styles.cloud_two}></div>
//       </div>
//       <div className={styles.right_box}>
//       <div className="text-center py-10">{children}</div>
//       </div>
//     </div>
//   </div>
//  <button type="button"
//           className="inline-flex items-center justify-center rounded-md text-sm text-slate-300 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:bg-slate-200 hover:text-white h-7 w-8">
//           <ChevronRight className="h-10 w-10" />
//         </button>
// </>
