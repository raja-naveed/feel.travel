import React, { FC } from "react";

export interface LockedUnlockedVillaIconProps {
  className?: string;
  isLocked?: boolean; // True for locked, false for unlocked
}

const LockedUnlockedVillaIcon: FC<LockedUnlockedVillaIconProps> = ({
  className = "",
  isLocked = true, // Default to locked
}) => {
  return (
		<div
			className={`nc-LockedUnlockedVillaIcon flex items-center justify-center  rounded-full bg-[#F3532B] text-xs ${className}`}
			data-nc-id="LockedUnlockedVillaIcon"
		>
						<img src="/cardicons/tripleader.png" className='w-10 h-10' />

		
		</div>
	)
};

export default LockedUnlockedVillaIcon;
