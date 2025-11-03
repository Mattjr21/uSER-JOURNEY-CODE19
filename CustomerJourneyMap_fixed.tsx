// Responsive Motorsport Customer Journey Map section with persona selector and interactive journey stages
import { useState, startTransition, type CSSProperties } from "react"
import { addPropertyControls, ControlType } from "framer"

interface JourneyStage {
    title: string
    description: string
    stats: Array<{
        icon: string
        label: string
        value: string
    }>
}

interface Persona {
    id: string
    emoji: string
    title: string
    description: string
    journey: JourneyStage[]
}

interface CustomerJourneyMapProps {
    heading: string
    subheading: string
    personas: Persona[]
    backgroundColor: string
    textColor: string
    accentColor: string
    headingFont: any
    subheadingFont: any
    titleFont: any
    bodyFont: any
    style?: CSSProperties
}

/**
 * Motorsport Customer Journey Map
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function CustomerJourneyMap(props: CustomerJourneyMapProps) {
    const {
        heading,
        subheading,
        personas = [],
        backgroundColor,
        textColor,
        accentColor,
        headingFont,
        subheadingFont,
        titleFont,
        bodyFont,
    } = props

    const [selectedPersona, setSelectedPersona] = useState(0)
    const [selectedStage, setSelectedStage] = useState(0)

    const handlePersonaSelect = (index: number) => {
        startTransition(() => {
            setSelectedPersona(index)
            setSelectedStage(0)
        })
    }

    const handleStageSelect = (index: number) => {
        startTransition(() => setSelectedStage(index))
    }

    const currentPersona = personas[selectedPersona]
    const currentStage = currentPersona?.journey?.[selectedStage]

    const isFixedWidth = props?.style && props.style.width === "100%"

    return (
        <section
            style={{
                ...props.style,
                position: "relative",
                backgroundColor,
                color: textColor,
                padding: "64px 24px",
                ...(isFixedWidth ? { ...props?.style } : { minWidth: "max-content" }),
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
                <div style={{ textAlign: "center", marginBottom: "48px" }}>
                    <h2 style={{ margin: "0 0 16px 0", ...headingFont }}>{heading}</h2>
                    <p style={{
                        margin: 0,
                        opacity: 0.8,
                        maxWidth: "600px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        ...subheadingFont,
                    }}>{subheading}</p>
                </div>

                {/* Persona Selector */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "16px",
                    marginBottom: "48px",
                }}>
                    {personas.map((persona, index) => (
                        <button
                            key={persona.id}
                            onClick={() => handlePersonaSelect(index)}
                            style={{
                                background: selectedPersona === index ? accentColor : "#FFFFFF",
                                color: selectedPersona === index ? "#FFFFFF" : textColor,
                                border: `2px solid ${selectedPersona === index ? accentColor : "#EEEEEE"}`,
                                borderRadius: "12px",
                                padding: "24px",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                                textAlign: "left",
                                boxShadow: selectedPersona === index
                                    ? "0 8px 24px rgba(0,0,0,0.12)"
                                    : "0 2px 8px rgba(0,0,0,0.04)",
                                transform: selectedPersona === index ? "translateY(-2px)" : "translateY(0)",
                            }}
                        >
                            <div style={{ fontSize: "32px", marginBottom: "12px" }}>{persona.emoji}</div>
                            <h3 style={{ margin: "0 0 8px 0", ...titleFont }}>{persona.title}</h3>
                            <p style={{ margin: 0, opacity: 0.8, ...bodyFont }}>{persona.description}</p>
                        </button>
                    ))}
                </div>

                {/* Journey Stages */}
                {currentPersona && currentPersona.journey && (
                    <div style={{
                        background: "#FFFFFF",
                        borderRadius: "16px",
                        padding: "32px",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    }}>
                        <div style={{
                            display: "flex",
                            gap: "8px",
                            marginBottom: "32px",
                            overflowX: "auto",
                            paddingBottom: "8px",
                        }}>
                            {currentPersona.journey.map((stage, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleStageSelect(index)}
                                    style={{
                                        background: selectedStage === index ? accentColor : "#F5F5F5",
                                        color: selectedStage === index ? "#FFFFFF" : textColor,
                                        border: "none",
                                        borderRadius: "8px",
                                        padding: "12px 24px",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        whiteSpace: "nowrap",
                                        minWidth: "120px",
                                        ...bodyFont,
                                    }}
                                >
                                    {stage.title}
                                </button>
                            ))}
                        </div>

                        {currentStage && (
                            <div>
                                <h3 style={{ margin: "0 0 16px 0", color: accentColor, ...titleFont }}>
                                    {currentStage.title}
                                </h3>
                                <p style={{
                                    margin: "0 0 32px 0",
                                    lineHeight: "1.6",
                                    ...bodyFont,
                                }}>
                                    {currentStage.description}
                                </p>

                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                    gap: "24px",
                                }}>
                                    {currentStage.stats.map((stat, index) => (
                                        <div key={index} style={{
                                            textAlign: "center",
                                            padding: "20px",
                                            background: "#F8F9FA",
                                            borderRadius: "12px",
                                        }}>
                                            <div style={{ fontSize: "24px", marginBottom: "8px" }}>{stat.icon}</div>
                                            <div style={{
                                                fontSize: "24px",
                                                fontWeight: "bold",
                                                color: accentColor,
                                                marginBottom: "4px",
                                                ...titleFont,
                                            }}>{stat.value}</div>
                                            <div style={{
                                                fontSize: "14px",
                                                opacity: 0.7,
                                                ...bodyFont,
                                            }}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}
