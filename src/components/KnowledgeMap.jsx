import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/KnowledgeMap.css';

const knowledgeDataVi = {
    nodes: [
        {
            id: 'center',
            label: 'Đấu Tranh Giai Cấp',
            type: 'center',
            x: 400,
            y: 300,
            color: 'var(--primary-red)',
            description: 'Khái niệm trung tâm của lý thuyết Mác-Lênin'
        },
        {
            id: 'class',
            label: 'Giai Cấp',
            type: 'main',
            x: 200,
            y: 200,
            color: 'var(--secondary-yellow)',
            description: 'Nhóm người có vị trí kinh tế - xã hội giống nhau'
        },
        {
            id: 'conflict',
            label: 'Xung Đột',
            type: 'main',
            x: 600,
            y: 200,
            color: 'var(--primary-red-light)',
            description: 'Mâu thuẫn lợi ích giữa các giai cấp'
        },
        {
            id: 'history',
            label: 'Lịch Sử',
            type: 'main',
            x: 200,
            y: 400,
            color: 'var(--accent-gold)',
            description: 'Động lực phát triển xã hội loài người'
        },
        {
            id: 'revolution',
            label: 'Cách Mạng',
            type: 'main',
            x: 600,
            y: 400,
            color: 'var(--secondary-yellow-dark)',
            description: 'Hình thức cao nhất của đấu tranh giai cấp'
        },
        {
            id: 'bourgeois',
            label: 'Tư Sản',
            type: 'sub',
            x: 100,
            y: 100,
            color: '#e74c3c',
            description: 'Giai cấp sở hữu tư liệu sản xuất'
        },
        {
            id: 'proletariat',
            label: 'Vô Sản',
            type: 'sub',
            x: 300,
            y: 100,
            color: '#3498db',
            description: 'Giai cấp lao động không sở hữu tư liệu sản xuất'
        },
        {
            id: 'socialism',
            label: 'Chủ Nghĩa Xã Hội',
            type: 'sub',
            x: 500,
            y: 500,
            color: '#f39c12',
            description: 'Xã hội không còn đối kháng giai cấp'
        },
        {
            id: 'communism',
            label: 'Chủ Nghĩa Cộng Sản',
            type: 'sub',
            x: 700,
            y: 500,
            color: '#9b59b6',
            description: 'Xã hội lý tưởng không có giai cấp'
        }
    ],
    connections: [
        { from: 'center', to: 'class' },
        { from: 'center', to: 'conflict' },
        { from: 'center', to: 'history' },
        { from: 'center', to: 'revolution' },
        { from: 'class', to: 'bourgeois' },
        { from: 'class', to: 'proletariat' },
        { from: 'conflict', to: 'bourgeois' },
        { from: 'conflict', to: 'proletariat' },
        { from: 'revolution', to: 'socialism' },
        { from: 'socialism', to: 'communism' },
        { from: 'history', to: 'revolution' }
    ]
};

const knowledgeDataEn = {
    nodes: [
        { id: 'center', label: 'Class Struggle', type: 'center', x: 400, y: 300, color: 'var(--primary-red)', description: 'Central concept in Marxist–Leninist theory' },
        { id: 'class', label: 'Class', type: 'main', x: 200, y: 200, color: 'var(--secondary-yellow)', description: 'Group sharing similar socio-economic position' },
        { id: 'conflict', label: 'Conflict', type: 'main', x: 600, y: 200, color: 'var(--primary-red-light)', description: 'Contradictory interests among classes' },
        { id: 'history', label: 'History', type: 'main', x: 200, y: 400, color: 'var(--accent-gold)', description: 'Motor of human social development' },
        { id: 'revolution', label: 'Revolution', type: 'main', x: 600, y: 400, color: 'var(--secondary-yellow-dark)', description: 'Highest form of class struggle' },
        { id: 'bourgeois', label: 'Bourgeoisie', type: 'sub', x: 100, y: 100, color: '#e74c3c', description: 'Class owning means of production' },
        { id: 'proletariat', label: 'Proletariat', type: 'sub', x: 300, y: 100, color: '#3498db', description: 'Class selling labour power; owns no means of production' },
        { id: 'socialism', label: 'Socialism', type: 'sub', x: 500, y: 500, color: '#f39c12', description: 'Society without antagonistic class conflict' },
        { id: 'communism', label: 'Communism', type: 'sub', x: 700, y: 500, color: '#9b59b6', description: 'Classless society with human emancipation' }
    ],
    connections: [
        { from: 'center', to: 'class' },
        { from: 'center', to: 'conflict' },
        { from: 'center', to: 'history' },
        { from: 'center', to: 'revolution' },
        { from: 'class', to: 'bourgeois' },
        { from: 'class', to: 'proletariat' },
        { from: 'conflict', to: 'bourgeois' },
        { from: 'conflict', to: 'proletariat' },
        { from: 'revolution', to: 'socialism' },
        { from: 'socialism', to: 'communism' },
        { from: 'history', to: 'revolution' }
    ]
};

const KnowledgeMap = () => {
    const [selectedNode, setSelectedNode] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [zoomLevel, setZoomLevel] = useState(1);
    const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const svgRef = useRef(null);
    const location = useLocation();
    const isEn = location.pathname.endsWith('/en') || location.pathname.includes('/en/');
    const knowledgeData = isEn ? knowledgeDataEn : knowledgeDataVi;

    // Hàm xử lý navigation khi click "Tìm hiểu thêm"
    const handleLearnMore = (nodeId) => {
        const nodeLinks = {
            'center': isEn ? '/theory/en' : '/theory',
            'class': isEn ? '/theory/en' : '/theory',
            'conflict': isEn ? '/role/en' : '/role',
            'history': isEn ? '/theory/en' : '/theory',
            'revolution': isEn ? '/future/en' : '/future',
            'bourgeois': isEn ? '/role/en' : '/role',
            'proletariat': isEn ? '/role/en' : '/role',
            'socialism': isEn ? '/future/en' : '/future',
            'communism': isEn ? '/future/en' : '/future'
        };
        const targetPath = nodeLinks[nodeId] || (isEn ? '/theory/en' : '/theory');
        window.location.href = targetPath;
    };

    const filteredNodes = knowledgeData.nodes.filter(node =>
        node.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleNodeClick = (node) => {
        setSelectedNode(node.id === selectedNode?.id ? null : node);
    };

    const handleZoom = (direction) => {
        const newZoom = direction === 'in' 
            ? Math.min(zoomLevel * 1.2, 3) 
            : Math.max(zoomLevel / 1.2, 0.5);
        setZoomLevel(newZoom);
    };

    const handleMouseDown = (e) => {
        if (e.target === svgRef.current) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - panOffset.x,
                y: e.clientY - panOffset.y
            });
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPanOffset({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, dragStart]);

    const resetView = () => {
        setZoomLevel(1);
        setPanOffset({ x: 0, y: 0 });
        setSelectedNode(null);
        setSearchTerm('');
    };

    return (
        <div className="knowledge-map-container">
            <div className="knowledge-map-header">
                <h2>{isEn ? 'Philosophical Knowledge Map' : 'Bản Đồ Tri Thức Triết Học'}</h2>
                <p>{isEn ? 'Explore conceptual linkages in class struggle theory' : 'Khám phá mối liên kết giữa các khái niệm trong lý thuyết đấu tranh giai cấp'}</p>
            </div>

            {/* Search and Controls */}
            <div className="map-controls">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder={isEn ? 'Search concept...' : 'Tìm kiếm khái niệm...'}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <button 
                        className="search-clear"
                        onClick={() => setSearchTerm('')}
                    >
                        ✕
                    </button>
                </div>

                <div className="zoom-controls">
                    <button 
                        className="zoom-btn"
                        onClick={() => handleZoom('in')}
                    >
                        🔍+
                    </button>
                    <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
                    <button 
                        className="zoom-btn"
                        onClick={() => handleZoom('out')}
                    >
                        🔍-
                    </button>
                </div>

                <button className="reset-btn" onClick={resetView}>
                    {isEn ? 'Reset View' : 'Reset View'}
                </button>
            </div>

            {/* Knowledge Map SVG */}
            <div className="map-viewport">
                <svg
                    ref={svgRef}
                    className="knowledge-svg"
                    viewBox="0 0 800 600"
                    onMouseDown={handleMouseDown}
                    style={{
                        transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                        cursor: isDragging ? 'grabbing' : 'grab'
                    }}
                >
                    {/* Render Connections */}
                    <defs>
                        <marker
                            id="arrowhead"
                            markerWidth="10"
                            markerHeight="7"
                            refX="9"
                            refY="3.5"
                            orient="auto"
                        >
                            <polygon
                                points="0 0, 10 3.5, 0 7"
                                fill="#666"
                            />
                        </marker>
                    </defs>

                    {knowledgeData.connections.map((connection, index) => {
                        const fromNode = knowledgeData.nodes.find(n => n.id === connection.from);
                        const toNode = knowledgeData.nodes.find(n => n.id === connection.to);
                        
                        if (!fromNode || !toNode) return null;

                        const isHighlighted = selectedNode && (
                            selectedNode.id === fromNode.id || 
                            selectedNode.id === toNode.id
                        );

                        return (
                            <line
                                key={index}
                                x1={fromNode.x}
                                y1={fromNode.y}
                                x2={toNode.x}
                                y2={toNode.y}
                                stroke={isHighlighted ? fromNode.color : '#ddd'}
                                strokeWidth={isHighlighted ? 3 : 1.5}
                                markerEnd="url(#arrowhead)"
                                className={`connection-line ${isHighlighted ? 'highlighted' : ''}`}
                            />
                        );
                    })}

                    {/* Render Nodes */}
                    {filteredNodes.map((node) => {
                        const isSelected = selectedNode?.id === node.id;
                        const isConnected = selectedNode && knowledgeData.connections.some(
                            conn => (conn.from === selectedNode.id && conn.to === node.id) ||
                                   (conn.to === selectedNode.id && conn.from === node.id)
                        );

                        const nodeSize = node.type === 'center' ? 50 : 
                                       node.type === 'main' ? 40 : 30;

                        return (
                            <g
                                key={node.id}
                                className={`knowledge-node ${node.type} ${isSelected ? 'selected' : ''} ${isConnected ? 'connected' : ''}`}
                                onClick={() => handleNodeClick(node)}
                                style={{ cursor: 'pointer' }}
                            >
                                {/* Node Circle */}
                                <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r={nodeSize}
                                    fill={node.color}
                                    stroke={isSelected ? '#fff' : 'none'}
                                    strokeWidth={isSelected ? 4 : 0}
                                    className="node-circle"
                                />

                                {/* Pulse Effect */}
                                {isSelected && (
                                    <circle
                                        cx={node.x}
                                        cy={node.y}
                                        r={nodeSize}
                                        fill="none"
                                        stroke={node.color}
                                        strokeWidth="2"
                                        className="node-pulse"
                                    />
                                )}

                                {/* Node Label */}
                                <text
                                    x={node.x}
                                    y={node.y + nodeSize + 20}
                                    textAnchor="middle"
                                    className="node-label"
                                    fill="#2c3e50"
                                >
                                    {node.label}
                                </text>

                                {/* Node Icon based on type */}
                                <text
                                    x={node.x}
                                    y={node.y + 5}
                                    textAnchor="middle"
                                    className="node-icon"
                                    fill="white"
                                    fontSize={node.type === 'center' ? '20' : node.type === 'main' ? '16' : '12'}
                                >
                                    {getNodeIcon(node.type, node.id)}
                                </text>
                            </g>
                        );
                    })}
                </svg>

                {/* Node Details Panel */}
                {selectedNode && (
                    <div className="node-details-panel">
                        <div className="panel-header">
                            <h3>{selectedNode.label}</h3>
                            <button 
                                className="close-panel"
                                onClick={() => setSelectedNode(null)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="panel-content">
                            <p className="node-description">{selectedNode.description}</p>
                            <div className="node-connections">
                                <h4>Kết nối:</h4>
                                <ul>
                                    {knowledgeData.connections
                                        .filter(conn => conn.from === selectedNode.id || conn.to === selectedNode.id)
                                        .map((conn, index) => {
                                            const connectedNodeId = conn.from === selectedNode.id ? conn.to : conn.from;
                                            const connectedNode = knowledgeData.nodes.find(n => n.id === connectedNodeId);
                                            return (
                                                <li key={index}>
                                                    <span 
                                                        className="connected-node"
                                                        onClick={() => handleNodeClick(connectedNode)}
                                                        style={{ color: connectedNode.color }}
                                                    >
                                                        {connectedNode.label}
                                                    </span>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="panel-actions">
                                <button 
                                    className="action-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleLearnMore(selectedNode.id);
                                    }}
                                >
                                        {isEn ? 'Learn more' : 'Tìm hiểu thêm'}
                                </button>
                                <button className="action-btn secondary">{isEn ? 'Share' : 'Chia sẻ'}</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Legend */}
            <div className="map-legend">
                <h4>{isEn ? 'Legend:' : 'Chú thích:'}</h4>
                <div className="legend-items">
                    <div className="legend-item">
                        <div className="legend-color center"></div>
                        <span>{isEn ? 'Central concept' : 'Khái niệm trung tâm'}</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color main"></div>
                        <span>{isEn ? 'Main concept' : 'Khái niệm chính'}</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color sub"></div>
                        <span>{isEn ? 'Sub concept' : 'Khái niệm phụ'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper function for node icons
const getNodeIcon = (type, id) => {
    const icons = {
        center: '⚡',
        class: '👥',
        conflict: '⚔️',
        history: '📚',
        revolution: '🚩',
        bourgeois: '💼',
        proletariat: '🔨',
        socialism: '🌱',
        communism: '🌟'
    };
    return icons[id] || (type === 'center' ? '💡' : type === 'main' ? '🔵' : '🔘');
};

export default KnowledgeMap;