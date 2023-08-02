import React, { ReactNode } from 'react';
import { Icon } from '@iconify/react';
import { ReactComponent as ChartIcon } from '../Assets/Icons/Dashboard/ChartIcon.svg';

interface CardProps {
    head1: string;
    head2: string;
    CardIcon: React.ReactNode;
    backgroundColor?: string;
    textColor?: string;
}

const DashboardCard1 = ({ head1, head2, CardIcon, backgroundColor, textColor }: CardProps) => {
    const cardStyle = {
        backgroundColor: backgroundColor || 'bg-white', // Use the provided backgroundColor prop, or fallback to the default class 'bg-white'
    };

    const textStyle = {
        color: textColor || 'text-slate-500', // Use the provided textColor prop, or fallback to the default class 'text-slate-500'
    };

    return (
        <div>
            <div className='rounded-xl' style={cardStyle}>
                <div className='flex justify-between'>
                    <div className='mx-4 mt-4  rounded-lg'>
                        {CardIcon}
                    </div>
                    <div className='mx-4 mt-4 text-xs text-theme-gray-1'>
                        <p>
                            This Week{' '}
                            <Icon className='inline-block' icon='ic:round-keyboard-arrow-down' width='20' />
                        </p>
                    </div>
                </div>
                <div className='flex justify-between pt-8 px-6'>
                    <div className='text-left my-4'>
                        <p className={`text-sm ${textStyle.color}`}>{head1}</p>
                        <h1 className={`text-xl font-medium pt-1  ${textStyle.color}` }>
                            450 <span className='text-xs text-theme-green-2'> + 0.00%</span>
                        </h1>
                    </div>
                    <div className='text-left my-4 relative right-10'>
                        <p className={`text-sm ${textStyle.color}`}>{head2}</p>
                        <h1 className={`text-xl font-medium pt-1 ${textStyle.color}`}>0</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCard1;
