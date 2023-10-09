'use client'
import React, { useState } from 'react';
import { useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

interface PersonProps {
  person: {
    title: string;
    role: string;
    imageUrl: string;
  },
  display:boolean;
}

const Team = (props: PersonProps) => {
  const {person,display} = props;
  const {title,role,imageUrl} = person;

  return (
    <div className=''>
      {
       display && (
          <div className='zoom-in bg-transparent  flex flex-col justify-center items-center gap-2'>
          <img className='w-48 lg:w-52 h-52 rounded-full' src={imageUrl} alt="teams" />
          <p className='font-semibold text-gray-300'>{title}</p>
          <p className='text-gray-500'>{role}</p>
      </div>
        )
      }

    </div>
  )
}


export default Team