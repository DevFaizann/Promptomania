"use client"

import Head from "next/head";
import Link from "next/link";
import styles from "../../../../styles/Form.module.css"
import Image from "next/image";
import {HiAtSymbol, HiFingerPrint, HiOutlineUser} from "react-icons/hi"
import { useState } from "react";

export default function Register() {

  const [show, setShow] = useState({
    password: false,  cpassword: false
  })
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            Register
          </h1>
          <p className="w-full mx-auto mb-4 text-gray-400">
            Plant Your Imagination, Watch It Grow.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <div className={styles.input_group}>
            <input 
            type="text"
            name="Username"
            placeholder="Username"
            className={styles.input_text} />
          <span className="icon flex items-center px-4"><HiOutlineUser size={25}/></span>
          </div>
          <div className={styles.input_group}>
            <input 
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input_text} />
          <span className="icon flex items-center px-4"><HiAtSymbol size={25}/></span>
          </div>
          <div className={styles.input_group}>
            <input 
            type={`${show.password?"text" : "password"}`}
            name="password"
            placeholder="Password"
            className={styles.input_text} />
            <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, password:!show.password})}><HiFingerPrint size={25}/></span>
          </div>
          <div className={styles.input_group}>
            <input 
            type={`${show.cpassword?"text" : "password"}`}
            name="cpassword"
            placeholder="Confirm Password"
            className={styles.input_text} />
            <span className="icon flex items-center px-4" onClick={() => setShow({...show, cpassword: !show.cpassword})}><HiFingerPrint size={25}/></span>
          </div>

          <div className="input-button">
            <button type="submit" className={styles.button}>
              Register
            </button>
          </div>

          {/* <div className="input-button">
            <button type="button" className={styles.button_custom}>
              Sign in with Google <Image src={'/assets/google.svg'} width="20" height="20"></Image>
            </button>
          </div>

          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              Sign in with Github <Image src={'/assets/github.svg'} width="25" height="25"></Image>
            </button>
          </div> */}

        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account? <Link href={'/login'}> <a className="text-blue-700"> Sign In </a> </Link>
        </p>
      </section>
    </div>
  );
}
