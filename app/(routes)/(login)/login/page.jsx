"use client"

import Head from "next/head";
import Link from "next/link";
import styles from "../../../../styles/Form.module.css"
import Image from "next/image";
import {HiAtSymbol, HiFingerPrint} from "react-icons/hi"
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {

  const[show, setShow] = useState(false)

  //google handler function
  async function handleGoogleSignin(){
    signIn('google', {callbackUrl: process.env.DEVELOPMENT_URL});
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            Explore
          </h1>
          <p className="w-3/4 mx-auto mb-4 text-gray-400">
            Feeding on Prompts, I'm AI-hungry.
          </p>
        </div>

        <form className="flex flex-col gap-4">
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
            type={`${show?"text" : "password"}`}
            name="password"
            placeholder="Password"
            className={styles.input_text} />
            <span className="icon flex items-center px-4" onClick={() => setShow(!show)}><HiFingerPrint size={25}/></span>
          </div>

          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>

          <div className="input-button">
            <button type="button" onClick={handleGoogleSignin} className={styles.button_custom}>
              Sign in with Google <Image src={'/assets/google.svg'} width="20" height="20"></Image>
            </button>
          </div>

          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              Sign in with Github <Image src={'/assets/github.svg'} width="25" height="25"></Image>
            </button>
          </div>

        </form>

        <p className="text-center text-gray-400 mt-5">
          don't have an account yet? <Link href={'/register'}> <a className="text-blue-700"> Sign Up </a> </Link>
        </p>
      </section>
    </div>
  )
}
