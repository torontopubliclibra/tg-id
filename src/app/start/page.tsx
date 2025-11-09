'use client'

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Checkbox = ({ id, label, checked, onChange, disabled }: CheckboxProps) => {
  return (
    <>
      <input type="checkbox" name={id} id={id} checked={checked} onChange={onChange} disabled={disabled} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default function Home() {
  const [toggles, setToggles] = useState({
    name: true,
    gender: true,
    birthOn: true,
    citizen: true,
    pr: false,
  });

  function handleToggleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    setToggles((prevToggles) => {
      if (name === 'birthOn' && checked) {
        return {
          ...prevToggles,
          [name]: checked,
          citizen: true,
          pr: false,
        };
      }
      return {
        ...prevToggles,
        [name]: checked,
      };
    });
  }

  return (
    <div className="page">
      <main className={styles.start}>
        <h2>Get Started</h2>
        <div className="stacks flipped"></div>
        <div className={styles.main}>
          <p>This page is designed to help you figure out where to start with updating your identity documents. Please select the options below that best describe your circumstances, and we will provide you with a personalized path.</p>
          <br />
          <ul>
            <li>
              <Checkbox id="name" label="You are changing your legal name in Ontario" checked={toggles.name} onChange={handleToggleChange} />
            </li>
            <li>
              <Checkbox id="gender" label="You are updating your gender markers" checked={toggles.gender} onChange={handleToggleChange} />
            </li>
            <li>
              <Checkbox id="birthOn" label="You have an Ontario birth certificate" checked={toggles.birthOn} onChange={handleToggleChange} />
            </li>
            {
              !(toggles.birthOn) ? (
              <li>
                <Checkbox id="citizen" label="You are a Canadian citizen" checked={toggles.citizen} onChange={handleToggleChange} />
              </li>
            ) : (
              <li style={{ opacity: 0.5, pointerEvents: 'none' }}>
                <Checkbox id="citizen" label="You are a Canadian citizen" checked={toggles.citizen} onChange={handleToggleChange} disabled />
              </li>
              )
            }
            {
              !(toggles.birthOn) && !(toggles.citizen) ? (
              <li>
                <Checkbox id="pr" label="You have permanent residency" checked={toggles.pr} onChange={handleToggleChange} />
              </li>
            ) : (
              <li style={{ opacity: 0.5, pointerEvents: 'none' }}>
                <Checkbox id="pr" label="You have permanent residency" checked={toggles.pr} onChange={handleToggleChange} disabled />
              </li>
              )
            }
          </ul>
          <br />
          <h3>Your personalized path:</h3>
          <ol>
            {
              !(toggles.name) && !(toggles.gender) ? (
                <li>
                  Please select the checkboxes above to see your personalized path.
                </li>
              ) : null
            }
            {
              (toggles.name) ? (
                <li>
                  <Link href="/on/name">Change your legal name with the Ontario government</Link>
                </li>
              ) : null
            }
            {
              (toggles.gender) && (toggles.birthOn)? (
                <li>
                  <Link href="/on/birth">Update the gender marker on your Ontario birth certificate</Link>
                </li>
              ) : null
            }
            {
              (toggles.name) ? (
                <li>
                  <Link href="/on/health">Update the name on your Ontario health card</Link>
                </li>
              ) : null
            }
            {
               ((toggles.name) || (toggles.gender)) ? (
                <li>
                  <Link href="/on/id">Update the { toggles.name && toggles.gender ? 'name and gender marker' : '' }{ toggles.name && !toggles.gender ? 'name' : '' }{ !toggles.name && toggles.gender ? 'gender marker' : '' } on your Ontario drivers license or photo card</Link>
                </li>
              ) : null
            }
            {
              (toggles.name || toggles.gender) && (toggles.citizen) ? (
                <li>
                  <Link href="/on/health">Update the { toggles.name && toggles.gender ? 'name and gender marker' : '' }{ toggles.name && !toggles.gender ? 'name' : '' }{ !toggles.name && toggles.gender ? 'gender marker' : '' } on your Canadian passport</Link>
                </li>
              ) : null
            }
            {
              (toggles.name || toggles.gender) && (toggles.pr) ? (
                <li>
                  <Link href="/on/health">Update the { toggles.name && toggles.gender ? 'name and gender marker' : '' }{ toggles.name && !toggles.gender ? 'name' : '' }{ !toggles.name && toggles.gender ? 'gender marker' : '' } on your Canadian permanent residency card</Link>
                </li>
              ) : null
            }
            {
              (toggles.name || toggles.gender) && (toggles.citizen || toggles.pr) ? (
                <li>
                  <Link href="/on/health">Update your { toggles.name && toggles.gender ? 'name and gender marker' : '' }{ toggles.name && !toggles.gender ? 'name' : '' }{ !toggles.name && toggles.gender ? 'gender marker' : '' } with the Social Insurance registry</Link>
                </li>
              ) : null
            }
            {
              (toggles.name || toggles.gender) && (toggles.citizen || toggles.pr) ? (
                <li>
                  <Link href="/on/health">Update your { toggles.name && toggles.gender ? 'name and gender marker' : '' }{ toggles.name && !toggles.gender ? 'name' : '' }{ !toggles.name && toggles.gender ? 'gender marker' : '' } with the Canada Revenue Agency</Link>
                </li>
              ) : null
            }
          </ol>
          <p>
            Each of the guides above provide step-by-step instructions, required forms, and helpful tips to make the process as smooth as possible.
          </p>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  );
}