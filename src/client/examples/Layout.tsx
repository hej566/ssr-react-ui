import React, { useEffect, useState  } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';
import Navbar from '../components/Navbar';
import NavItem from '../components/NavItem';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/AccordionItem';
import Input from '../components/Input';
import Button from '../components/Button';
import DropdownItem from '../components/DropdownItem';
import Dropdown from '../components/Dropdown';
import InputGroup from '../components/InputGroup';
// @ts-ignore
// import loadable from '@loadable/component'

import LayoutNav from './LayoutNav';

const Layout = (props: any) => {
  const { link, children } = props;



  const match = useMatch('/');

  const [isOpen, setOpenState] = useState<boolean>(false);
  const [defaultActiveId, setDefaultActiveId] = useState<string>('');

  const LinkRoot = link!;

  const clickHandler = (key: any) => {
    setDefaultActiveId(() => key);
  };

  const { pathname } = useLocation();
  const [current, setCurrenRoute] = useState<string>(pathname);

  function changeHandler(path: string) {
    setCurrenRoute(path);
  }

  useEffect(() => {
    setCurrenRoute(pathname);
  }, [pathname]);

  return (
    <div className="layout">
      {match?.pathname !== '/' && (
        <>
          <div className="layout-headbar">
            <Navbar title="Navbar" className="navbar-expand-lg" variant="primary" theme="dark">
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="6" dropdown navbar>
                <Dropdown variant="link" buttonName="Dropdown" type="normal">
                  <DropdownItem isActive itemId="8">
                    Action
                  </DropdownItem>
                  <DropdownItem isDisabled itemId="9">
                    Another action
                  </DropdownItem>
                  <DropdownItem itemId="10">Something else here</DropdownItem>
                  <hr className="dropdown-divider" />
                  <DropdownItem itemId="13">Separated link</DropdownItem>
                </Dropdown>
              </NavItem>
              <NavItem itemId="2">Link</NavItem>
              <NavItem itemId="22" className="nav-form">
                <InputGroup>
                  <Input placeholder="search" />
                  <Button variant="danger">Button</Button>
                </InputGroup>
              </NavItem>
            </Navbar>
          </div>
          <div className="layout-topbar">
            <Accordion only>
              <AccordionItem
                title=" Accordion Item #1"
                itemId="1"
                suffixIcon={<Icon component={Acorn} />}
              >
                    <LayoutNav current={current} onChange={changeHandler} />
              </AccordionItem>
            </Accordion>
          </div>
          <div className="layout-body d-flex">
            <div className="layout-sidebar col-lg-2 col-12">
                  <LayoutNav current={current} onChange={changeHandler} />
            </div>
            <div className="layout-main col-lg-10 col-12">{children}</div>
          </div>
        </>
      )}
      {match?.pathname === '/' && children}
    </div>
  );
};

export default Layout;
