import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, X } from 'lucide-react';

const Modal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 bg-express-modal/90 backdrop-blur-sm flex justify-center items-center px-4">
            <div className="relative rounded-lg shadow-lg w-full max-w-xl p-6">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-express-purple"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>
                <div className="text-center text-foreground mt-6">
                    {/* Your other page content */}
                </div>

                {/* Modal Content */}
                <div className="bg-express-purple text-white rounded-xl px-8 py-8 flex flex-col gap-5 items-center">
                    <div className="text-center text-foreground mt-6">
                        {/* Your other page content */}
                    </div>
                    <h1
                        className="text-3xl font-extrabold text-center "
                        style={{ color: 'black', fontFamily: 'Playfair Display, serif' }}
                    >
                        Veritas: A Scandal of Expression
                    </h1>
                    <div className="text-center text-foreground mt-8">
                        {/* Your other page content */}
                    </div>
                    <p className="text-lg font-bold max-w-md text-center">
                        🕵️‍♂️ The game is afoot! Join Teams of Two in a Sherlock-inspired showdown packed with
                        mystery, wit, and a dash of drama! From clever debates to thrilling games, step into
                        your own episode of deduction and deception. Get ready to solve, perform, and steal the
                        spotlight! 🔍🎭
                    </p>
                    <div className="mt-4">
                        <Link
                            to="/upcoming-events"
                            className="bg-express-purple text-white hover:bg-express-purple/90 transition-colors group"
                        >
                            <span className="font-semibold tracking-wider">Know More</span>
                        </Link>
                    </div>
                    <div className="text-center text-foreground mt-8">
                        {/* Your other page content */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
