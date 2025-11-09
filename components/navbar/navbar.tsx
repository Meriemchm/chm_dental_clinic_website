"use client";

import { NavbarItems } from "@/components/data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../ui/button";
import { Container } from "../ui/container";

const Navbar = () => {
  const [open, isOpen] = useState(false);

  return (
    <div className="bg-white fixed w-full z-50">
      <Container>
        {/*Desktop*/}
        <div className="hidden md:flex w-full h-20 text-black justify-between  items-center ">
          {/*Image*/}

          <Link href={"/"}>
            <Image
              src="/Images/logo.png"
              alt="logo"
              width={130}
              height={120}
              className="object-contain"
            />
          </Link>

          {/*NavItems*/}
          <div className="flex items-center gap-8">
            {NavbarItems.map((item, index) => (
              <div key={index} className="flex items-center gap-6 capitalize">
                <Link
                  href={item.link}
                  className="hover:text-primary transition"
                >
                  {item.name}
                </Link>
              </div>
            ))}

            <Button>
              {" "}
              <Link href="/book-an-appointment">Book Now</Link>
            </Button>
          </div>
        </div>

        {/*Mobile*/}
        <div className="md:hidden flex w-full h-20 bg-white text-black justify-between  items-center ">
          {/*Image*/}
          <Link href={"/"}>
            <Image
              src="/Images/logo.png"
              alt="logo"
              width={130}
              height={120}
              className="object-contain"
            />
          </Link>
          {/*Hamburger Icon*/}
          <div
            className="text-3xl cursor-pointer"
            onClick={() => isOpen(!open)}
          >
            <Image
              src={open ? "/Icons/times.svg" : "/Icons/bars.svg"}
              alt="logo"
              width={28}
              height={28}
              className="object-contain"
            />{" "}
          </div>
        </div>

        {/*Mobile Menu*/}

        {open && (
          <div className="h-screen bg-white text-black flex flex-col items-center justify-center gap-8 pb-34">
            {/*NavItems*/}
            {NavbarItems.map((item, index) => (
              <div key={index} className="flex items-center capitalize text-xl">
                <Link
                  href={item.link}
                  className="hover:text-primary transition"
                  onClick={() => isOpen(!open)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <Button>
              {" "}
              <Link href="/book-an-appointment" onClick={() => isOpen(!open)}>
                Book Now
              </Link>
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
