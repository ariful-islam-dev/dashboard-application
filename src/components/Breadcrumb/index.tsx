import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
    pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
    return (
        <div>
            <h2>{pageName}</h2>
            <nav>
                <ol>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb