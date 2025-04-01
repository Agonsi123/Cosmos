import React from 'react';
import bell from '../../../assets/bell.png';


const UsermanagementHeader = () => {
    return (
        <div className="py-4 px-4">
            <div className="">
                <div className="flex gap-8 justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div>
                            <h2 className="text-[#1E1E1E] font-semibold text-lg">
                                User Management
                            </h2>
                            <div className="flex items-center gap-3">
                                <p className="text-[#00000080] font-normal text-sm">
                                    View, manage, and oversea user accounts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={bell} alt="bell" />
                    </div>
                </div>
            </div>
            <div className="px-4 py-2">
                <hr />
            </div>
        </div>
    )
}

export default UsermanagementHeader