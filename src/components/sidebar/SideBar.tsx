import { ReactNode } from 'react';
import './SideBar.css'
import useWindowWidth from '../../hooks/useWindowWidth';

interface SideBarProps {
  children: ReactNode;
}
export const SideBar = ({ children }: SideBarProps) => {
  const windowWidth = useWindowWidth();
  console.log(windowWidth)
  return (
    <div className='side-bar'>
      {children}
    </div>
  )
}
