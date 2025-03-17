'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [tarefas, settarefas] = useState([])
  async function buscarTarefas() {
    const tarefas = await 
  }
  return (
    <div>
      <h1>Lista de tarefas</h1>

    </div>
  );
}
