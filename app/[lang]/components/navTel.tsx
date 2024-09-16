"use client"
import React from "react";
import {
  Drawer,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
import { MenuCustomList } from "./langeEdit";

interface INav {
  lang: any;
  params: any;
}

export function NavTel({ lang, params }: INav) {
  const [openTop, setOpenTop] = React.useState(false);

  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

  return (
    <React.Fragment>
      <Button className="md:hidden px-0" variant="text" size="lg" onClick={openDrawerTop}>
        {openTop ? (
          <XMarkIcon className="h-8 w-8 stroke-2 text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2 text-white" />
        )}
      </Button>
      <Drawer className="text-white navTel !h-[100px] px-5" placement="top" open={openTop} onClose={closeDrawerTop}>
        <div className="mb-2 pt-2 flex items-center justify-between gap-10">
          <MenuCustomList />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7 translate-x-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List className="flex flex-row h-auto items-center justify-between !p-0">
          <Link onClick={closeDrawerTop} href={`/${params}/about`}>
            <ListItem className="text-[18px]">
              {lang.about}
            </ListItem>
          </Link>
          <Link onClick={closeDrawerTop} href={`/${params}/projects`}>
            <ListItem>
              {lang.projects}
            </ListItem>
          </Link>
          <Link onClick={closeDrawerTop} href={`/${params}/contact`}>
            <ListItem>
              {lang.contact}
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </React.Fragment>
  );
}