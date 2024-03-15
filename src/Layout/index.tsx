import React, { ReactNode } from 'react'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div>
            <div>
                {/* TODO: Sidebar */}
                <aside></aside>
                <div>
                    <div>
                        <header></header>
                        <main>
                            <div>
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout