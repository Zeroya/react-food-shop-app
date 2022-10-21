import React, { FC, useState } from "react";
import Categories from "@components/Categories/Categories";
import { Drawer } from "antd";
import type { DrawerProps } from "antd/es/drawer";
import s from "./SideBar.module.scss";

const SideBar: FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={s.sidebar}>
      <button onClick={showDrawer} className={s.sidebar__button}>
        <p>Filters</p>
      </button>
      <Drawer title="Filters" placement={placement} width={"100%"} onClose={onClose} open={open}>
        <Categories />
      </Drawer>
    </div>
  );
};

export default SideBar;
