"use client";

import React, { createContext, useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ContactDialog } from "./ContactDialog";

interface BookingContextType {
  isOpen: boolean;
  preselectedService: string | null;
  openBooking: (service?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | null>(null);

  const openBooking = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    } else {
      setPreselectedService(null);
    }
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setPreselectedService(null);
  };

  return (
    <BookingContext.Provider value={{ isOpen, preselectedService, openBooking, closeBooking }}>
      {children}
      <AnimatePresence>
        {isOpen && <ContactDialog onClose={closeBooking} preselectedService={preselectedService} />}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
