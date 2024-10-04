"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function IndonesiaCard() {
  return (
    <div className="bg-gradient-to-r from-green-500 via-white to-green-500 min-h-screen pt-64">
    <div className="w-full max-w-md mx-auto p-1 rounded-lg animated-border">
      <Card className="w-full bg-white">
        <CardHeader>
          <CardTitle>Country Information</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-3 gap-4 text-sm">
            <dt className="font-semibold">Country:</dt>
            <dd className="col-span-2">Nigeria</dd>
            
            <dt className="font-semibold">Capital:</dt>
            <dd className="col-span-2">Abuja</dd>
            
            <dt className="font-semibold">Population:</dt>
            <dd className="col-span-2">218.5 million</dd>
          </dl>
        </CardContent>
      </Card>
      <style jsx>{`
        .animated-border {
          position: relative;
          background: linear-gradient(
            60deg,
            #ff0000,
            #ff4d00,
            #ff9900,
            #ffcc00,
            #ffff00,
            #ccff00,
            #66ff00,
            #00ff00
          );
          background-size: 300% 300%;
          animation: animatedgradient 3s ease alternate infinite;
        }

        .animated-border::before {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(10px);
          z-index: -1;
        }

        @keyframes animatedgradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
    </div>
  )
}