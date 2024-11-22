"use client";
import { useState } from "react";
import { Button } from "./";

interface ModalWindowProps {
  actionButtonText: string;
  children?: React.ReactNode;
  leftButtonIcon?: JSX.Element;
  modalTitle: string;
  rightButtonIcon?: JSX.Element;
  stylesButton?: string;
}

export function ModalWindow({
  actionButtonText = "abrir",
  children,
  leftButtonIcon,
  modalTitle,
  rightButtonIcon,
  stylesButton
}: ModalWindowProps): JSX.Element {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        leftIcon={leftButtonIcon}
        onClick={() => setOpenModal(!openModal)}
        rightIcon={rightButtonIcon}
        text={actionButtonText}
        title={modalTitle}
        styles={stylesButton}
      />

      {
        openModal &&
        <div className="bg-stone-900/80 flex justify-center items-center fixed top-0 left-0 h-screen w-screen p-2 z-50 transition-all">
          <section className="bg-stone-200 dark:bg-stone-800 outline outline-2 outline-sky-900 rounded-lg h-[70vh] w-full md:w-[40vw] flex flex-col overflow-hidden transition-all">
            <header className="bg-sky-900 outline outline-2  outline-sky-800 flex justify-between items-center p-1 md:px-2">
              <h3 className="text-xl capitalize">{modalTitle}</h3>

              <Button
                onClick={() => setOpenModal(!openModal)}
                rightIcon={rightButtonIcon}
                text={"cerrar"}
                title={"cerrar ventana"}
              />
            </header>

            <section className="p-1 md:px-2 overflow-y-auto">
              {children}
            </section>
          </section>
        </div>
      }
    </>
  )
}
