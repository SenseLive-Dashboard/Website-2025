"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  Bot,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  Download,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  options?: string[]
  links?: {
    text: string
    url: string
    type: "page" | "document" | "external"
  }[]
}

interface ConversationContext {
  lastTopic?: string
  userInterests?: string[]
  visitedPages?: string[]
  mentionedProducts?: string[]
  questionsAsked: number
  needsHumanSupport: boolean
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)
  const [feedbackGiven, setFeedbackGiven] = useState<boolean | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const hasShownPopup = useRef(false)
  const [conversationContext, setConversationContext] = useState<ConversationContext>({
    questionsAsked: 0,
    needsHumanSupport: false,
  })
  const [showPrivacyInfo, setShowPrivacyInfo] = useState(false)

  // Show welcome popup after a delay when user first lands on the site
  useEffect(() => {
    if (!hasShownPopup.current) {
      const timer = setTimeout(() => {
        setShowWelcomePopup(true)
        hasShownPopup.current = true
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  // Initialize chat with welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: "welcome",
        text: "👋 Welcome to SenseLive! I'm SenseAI, your intelligent assistant for IoT solutions. How can I help you today?",
        sender: "bot",
        timestamp: new Date(),
        options: [
          "Tell me about your products",
          "I need technical documentation",
          "How can SenseLive help my business?",
        ],
      }
      setMessages([initialMessage])
    }
  }, [isOpen, messages.length])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (showWelcomePopup) {
      setShowWelcomePopup(false)
    }
  }

  const handleSendMessage = (e: React.FormEvent | null, predefinedMessage?: string) => {
    if (e) e.preventDefault()

    const messageText = predefinedMessage || message
    if (!messageText.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")

    // Update conversation context
    setConversationContext((prev) => ({
      ...prev,
      questionsAsked: prev.questionsAsked + 1,
      lastTopic: messageText.toLowerCase(),
    }))

    // Simulate bot typing
    setIsTyping(true)

    // Simulate bot response after a delay
    const typingDelay = Math.floor(Math.random() * 800) + 800 // Random delay between 0.8-1.6 seconds
    setTimeout(() => {
      let botResponse: Message

      if (predefinedMessage) {
        botResponse = handlePredefinedResponse(predefinedMessage)
      } else {
        botResponse = generateContextualResponse(messageText, pathname, conversationContext)
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, typingDelay)
  }

  const handlePredefinedResponse = (predefinedMessage: string): Message => {
    // Handle predefined option clicks
    if (predefinedMessage === "Tell me about your products") {
      updateConversationContext("products")
      return {
        id: (Date.now() + 1).toString(),
        text: "SenseLive offers a comprehensive range of IoT solutions for industrial and commercial applications. Our product lineup includes:",
        sender: "bot",
        timestamp: new Date(),
        options: ["Wireless sensors", "IoT gateways", "Energy management systems", "Water management solutions"],
        links: [
          {
            text: "View all products",
            url: "/products",
            type: "page",
          },
          {
            text: "Featured: Edge8000",
            url: "/products/wireless-bus-bar/edge8000",
            type: "page",
          },
        ],
      }
    }

    if (predefinedMessage === "I need technical documentation") {
      updateConversationContext("documentation")
      return {
        id: (Date.now() + 1).toString(),
        text: "I can help you find the technical documentation you need. What specific product or solution are you looking for information about?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Edge8000 documentation", "X9000 gateway specs", "SenseBT-222 datasheet", "Browse all documentation"],
        links: [
          {
            text: "Downloads center",
            url: "/downloads",
            type: "page",
          },
        ],
      }
    }

    if (predefinedMessage === "How can SenseLive help my business?") {
      return {
        id: (Date.now() + 1).toString(),
        text: "Our clients typically see benefits in three key areas: 1. Cost Reduction - Through energy optimization and preventive maintenance, 2. Operational Efficiency - With real-time monitoring and analytics, 3. Compliance & Sustainability - Meeting regulatory requirements and ESG goals. May I ask what industry you're in? That would help me provide more specific examples.",
        sender: "bot",
        timestamp: new Date(),
      }
    }

    if (predefinedMessage.includes("Wireless sensors")) {
      updateConversationContext("wireless sensors")
      return {
        id: (Date.now() + 1).toString(),
        text: "Our wireless sensors provide reliable monitoring for various industrial parameters. The SenseBT-222 offers 5-year battery life, while the SenseCT-222 is self-powered through current flow. Both transmit data wirelessly to our gateways for seamless integration with your monitoring systems.",
        sender: "bot",
        timestamp: new Date(),
        options: ["SenseBT-222 details", "SenseCT-222 details", "Sensor applications"],
        links: [
          {
            text: "SenseBT-222 page",
            url: "/products/wireless-bus-bar/sensebt-222",
            type: "page",
          },
          {
            text: "SenseCT-222 page",
            url: "/products/wireless-bus-bar/sensect-222",
            type: "page",
          },
        ],
      }
    }

    if (predefinedMessage.includes("IoT gateways")) {
      updateConversationContext("IoT gateways")
      return {
        id: (Date.now() + 1).toString(),
        text: "SenseLive gateways connect your sensors to the cloud, enabling real-time monitoring and control. Our X9000 4G gateway features edge computing capabilities, while the X5050 specializes in Modbus integration. Both support multiple protocols and are designed for industrial environments.",
        sender: "bot",
        timestamp: new Date(),
        options: ["X9000 specifications", "X5050 specifications", "Gateway selection guide"],
        links: [
          {
            text: "X9000 gateway",
            url: "/products/connectivity/x9000",
            type: "page",
          },
          {
            text: "X5050 gateway",
            url: "/products/gateways/x5050",
            type: "page",
          },
        ],
      }
    }

    if (predefinedMessage.includes("Energy management")) {
      updateConversationContext("energy management")
      return {
        id: (Date.now() + 1).toString(),
        text: "Our Energy Management System (EMS) helps businesses reduce energy consumption by up to 30%. The system monitors energy usage in real-time, identifies inefficiencies, and provides actionable insights for optimization. It includes hardware, software, and analytics components for a complete solution.",
        sender: "bot",
        timestamp: new Date(),
        options: ["EMS features", "Implementation process", "ROI calculator"],
        links: [
          {
            text: "Energy Management Solution",
            url: "/solutions/ems",
            type: "page",
          },
          {
            text: "EMS case study",
            url: "/downloads",
            type: "page",
          },
        ],
      }
    }

    if (predefinedMessage.includes("Water management")) {
      updateConversationContext("water management")
      return {
        id: (Date.now() + 1).toString(),
        text: "SenseLive's Water Management Solution provides comprehensive monitoring of water systems, detecting leaks, measuring quality, and optimizing usage. Our clients typically see a 15-25% reduction in water consumption and significantly faster leak detection.",
        sender: "bot",
        timestamp: new Date(),
        options: ["System components", "Installation requirements", "Success stories"],
        links: [
          {
            text: "Water Management Solution",
            url: "/solutions/water-management",
            type: "page",
          },
          {
            text: "Request a demo",
            url: "/contact",
            type: "page",
          },
        ],
      }
    }

    if (predefinedMessage.includes("Edge8000 documentation") || predefinedMessage.includes("Edge8000 datasheet")) {
      updateConversationContext("Edge8000 documentation")
      return {
        id: (Date.now() + 1).toString(),
        text: "Here's the documentation for the Edge8000 wireless bus bar monitoring system. You can download the datasheet, installation guide, and user manual directly from our downloads center.",
        sender: "bot",
        timestamp: new Date(),
        links: [
          {
            text: "Edge8000 datasheet",
            url: "/downloads",
            type: "document",
          },
          {
            text: "Installation guide",
            url: "/downloads",
            type: "document",
          },
          {
            text: "User manual",
            url: "/downloads",
            type: "document",
          },
        ],
      }
    }

    if (predefinedMessage.includes("X9000 gateway specs") || predefinedMessage.includes("X9000 specifications")) {
      updateConversationContext("X9000 documentation")
      return {
        id: (Date.now() + 1).toString(),
        text: "The X9000 is our flagship 4G IoT gateway with edge computing capabilities. Here are the technical specifications and documentation you requested:",
        sender: "bot",
        timestamp: new Date(),
        links: [
          {
            text: "X9000 datasheet",
            url: "/downloads",
            type: "document",
          },
          {
            text: "Technical specifications",
            url: "/downloads",
            type: "document",
          },
          {
            text: "Configuration guide",
            url: "/downloads",
            type: "document",
          },
        ],
      }
    }

    if (predefinedMessage.includes("SenseBT-222 datasheet") || predefinedMessage.includes("SenseBT-222 details")) {
      updateConversationContext("SenseBT-222 documentation")
      return {
        id: (Date.now() + 1).toString(),
        text: "The SenseBT-222 is our battery-powered wireless temperature sensor with 5-year battery life. Here's the technical documentation you requested:",
        sender: "bot",
        timestamp: new Date(),
        links: [
          {
            text: "SenseBT-222 datasheet",
            url: "/downloads",
            type: "document",
          },
          {
            text: "Battery life calculator",
            url: "/downloads",
            type: "document",
          },
          {
            text: "Installation guide",
            url: "/downloads",
            type: "document",
          },
        ],
      }
    }

    if (predefinedMessage.includes("Browse all documentation")) {
      updateConversationContext("all documentation")
      return {
        id: (Date.now() + 1).toString(),
        text: "You can browse all our technical documentation in our downloads center. It's organized by product category for easy navigation. Is there a specific type of document you're looking for?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Datasheets", "User manuals", "Installation guides", "White papers"],
        links: [
          {
            text: "Visit downloads center",
            url: "/downloads",
            type: "page",
          },
        ],
      }
    }

    if (predefinedMessage.includes("Case studies")) {
      updateConversationContext("case studies")
      return {
        id: (Date.now() + 1).toString(),
        text: "Our case studies showcase real-world implementations and results achieved by our clients. They cover various industries and applications, demonstrating the versatility and effectiveness of SenseLive solutions.",
        sender: "bot",
        timestamp: new Date(),
        options: ["Manufacturing case study", "Data center case study", "Utility case study"],
        links: [
          {
            text: "All case studies",
            url: "/downloads",
            type: "page",
          },
        ],
      }
    }

    // Default response for other predefined messages
    return {
      id: (Date.now() + 1).toString(),
      text: `I'd be happy to provide more information about ${predefinedMessage}. Could you tell me what specific aspects you're interested in?`,
      sender: "bot",
      timestamp: new Date(),
      options: ["Technical specifications", "Pricing information", "Implementation details", "Talk to a specialist"],
    }
  }

  const updateConversationContext = (topic: string) => {
    setConversationContext((prev) => {
      const userInterests = prev.userInterests || []
      if (!userInterests.includes(topic)) {
        userInterests.push(topic)
      }

      return {
        ...prev,
        lastTopic: topic,
        userInterests,
      }
    })
  }

  const generateContextualResponse = (msg: string, currentPath: string, context: ConversationContext): Message => {
    const lowerMsg = msg.toLowerCase()

    // Check if user needs human support
    if (
      lowerMsg.includes("speak to human") ||
      lowerMsg.includes("talk to person") ||
      lowerMsg.includes("real person") ||
      lowerMsg.includes("speak to representative") ||
      lowerMsg.includes("talk to sales") ||
      (context.questionsAsked > 5 && !context.needsHumanSupport)
    ) {
      setConversationContext((prev) => ({ ...prev, needsHumanSupport: true }))

      return {
        id: (Date.now() + 1).toString(),
        text: "I'd be happy to connect you with a SenseLive representative. You can reach our team directly at info@senselive.io or call +91 9604070622. Alternatively, I can have someone contact you - would you like to provide your email address?",
        sender: "bot",
        timestamp: new Date(),
        links: [
          {
            text: "Contact page",
            url: "/contact",
            type: "page",
          },
        ],
      }
    }

    // Product-specific responses
    if (lowerMsg.includes("edge8000") || lowerMsg.includes("edge 8000")) {
      updateConversationContext("Edge8000")
      return {
        id: (Date.now() + 1).toString(),
        text: "The Edge8000 is our premium wireless bus bar monitoring system with integrated energy metering. It connects up to 60 wireless sensors and features dual relays for automated control. Would you like to see the technical specifications or learn about implementation options?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Edge8000 specifications", "Implementation guide", "Request a quote"],
        links: [
          {
            text: "Edge8000 product page",
            url: "/products/wireless-bus-bar/edge8000",
            type: "page",
          },
          {
            text: "Technical datasheet",
            url: "/downloads",
            type: "document",
          },
        ],
      }
    }

    if (lowerMsg.includes("sensebt") || lowerMsg.includes("bt-222") || lowerMsg.includes("battery sensor")) {
      updateConversationContext("SenseBT-222")
      return {
        id: (Date.now() + 1).toString(),
        text: "The SenseBT-222 is our battery-powered wireless temperature sensor with 5-year battery life at 5-minute reporting intervals. It's IP65 rated and operates in temperatures from -40°C to +85°C. Would you like to learn more about its applications or technical specifications?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Technical specifications", "Application examples", "Battery life details"],
        links: [
          {
            text: "SenseBT-222 product page",
            url: "/products/wireless-bus-bar/sensebt-222",
            type: "page",
          },
          {
            text: "Datasheet",
            url: "/downloads",
            type: "document",
          },
        ],
      }
    }

    if (lowerMsg.includes("sensect") || lowerMsg.includes("ct-222") || lowerMsg.includes("self-powered")) {
      updateConversationContext("SenseCT-222")
      return {
        id: (Date.now() + 1).toString(),
        text: "The SenseCT-222 is our self-powered wireless temperature sensor that harvests energy from current flow. It requires no batteries or maintenance and is ideal for long-term monitoring of electrical equipment. Would you like to learn more about its installation requirements or technical specifications?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Technical specifications", "Installation requirements", "Compatible systems"],
        links: [
          {
            text: "SenseCT-222 product page",
            url: "/products/wireless-bus-bar/sensect-222",
            type: "page",
          },
          {
            text: "Datasheet",
            url: "/downloads",
            type: "document",
          },
        ],
      }
    }

    if (lowerMsg.includes("x9000") || lowerMsg.includes("4g gateway")) {
      updateConversationContext("X9000")
      return {
        id: (Date.now() + 1).toString(),
        text: "The X9000 is our flagship 4G IoT gateway with edge computing capabilities. It features multiple I/O channels, dual RS485 ports, and supports various protocols including Modbus, MQTT, and HTTP. Would you like to learn more about its connectivity options or edge computing features?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Connectivity options", "Edge computing features", "Protocol support"],
        links: [
          {
            text: "X9000 product page",
            url: "/products/connectivity/x9000",
            type: "page",
          },
          {
            text: "Technical specifications",
            url: "/downloads",
            type: "document",
          },
        ],
      }
    }

    if (lowerMsg.includes("x5050") || lowerMsg.includes("modbus gateway")) {
      updateConversationContext("X5050")
      return {
        id: (Date.now() + 1).toString(),
        text: "The X5050 is our reliable Modbus gateway that converts RS485 signals to TCP/IP. It's perfect for integrating legacy equipment into modern monitoring systems. It supports up to 32 Modbus devices and features automatic device discovery. Would you like to learn more about its compatibility or configuration options?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Compatibility information", "Configuration options", "Integration examples"],
        links: [
          {
            text: "X5050 product page",
            url: "/products/gateways/x5050",
            type: "page",
          },
          {
            text: "Technical specifications",
            url: "/downloads",
            type: "document",
          },
        ],
      }
    }

    // Solution-specific responses
    if (lowerMsg.includes("energy management") || lowerMsg.includes("ems") || currentPath.includes("/solutions/ems")) {
      updateConversationContext("Energy Management")
      return {
        id: (Date.now() + 1).toString(),
        text: "Our Energy Management System helps businesses reduce energy consumption by up to 30%. It provides real-time monitoring, analytics, and automated controls to optimize energy usage. The system typically pays for itself within 12-18 months through energy savings. Would you like to learn more about specific features or implementation process?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Key features", "Implementation process", "ROI calculation"],
        links: [
          {
            text: "Energy Management Solution",
            url: "/solutions/ems",
            type: "page",
          },
          {
            text: "Case study",
            url: "/downloads",
            type: "document",
          },
        ],
      }
    }

    if (lowerMsg.includes("water management") || currentPath.includes("/solutions/water")) {
      updateConversationContext("Water Management")
      return {
        id: (Date.now() + 1).toString(),
        text: "Our Water Management Solution provides comprehensive monitoring of water systems, detecting leaks, measuring quality, and optimizing usage. It combines flow meters, pressure sensors, and quality analyzers with our powerful analytics platform. Would you like to learn more about the system components or implementation process?",
        sender: "bot",
        timestamp: new Date(),
        options: ["System components", "Implementation process", "Case studies"],
        links: [
          {
            text: "Water Management Solution",
            url: "/solutions/water-management",
            type: "page",
          },
          {
            text: "Solution brief",
            url: "/downloads",
            type: "document",
          },
        ],
      }
    }

    // Documentation and support queries
    if (
      lowerMsg.includes("manual") ||
      lowerMsg.includes("guide") ||
      lowerMsg.includes("documentation") ||
      lowerMsg.includes("datasheet") ||
      lowerMsg.includes("specs")
    ) {
      updateConversationContext("documentation")
      return {
        id: (Date.now() + 1).toString(),
        text: "You can find all our technical documentation in our downloads center. It includes datasheets, user manuals, installation guides, and technical specifications. Is there a specific product you need documentation for?",
        sender: "bot",
        timestamp: new Date(),
        options: [
          "Edge8000 documentation",
          "X9000 documentation",
          "SenseBT-222 documentation",
          "Browse all documentation",
        ],
        links: [
          {
            text: "Downloads center",
            url: "/downloads",
            type: "page",
          },
        ],
      }
    }

    if (
      lowerMsg.includes("support") ||
      lowerMsg.includes("help") ||
      lowerMsg.includes("issue") ||
      lowerMsg.includes("problem") ||
      lowerMsg.includes("trouble")
    ) {
      updateConversationContext("support")
      return {
        id: (Date.now() + 1).toString(),
        text: "Our support team is available to help with any technical issues or questions. You can reach them at support@senselive.io or call +91 8408058531 during business hours (Monday to Friday, 9:00 AM to 6:00 PM IST). Would you like me to help troubleshoot a specific issue?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Common troubleshooting steps", "Report a technical issue", "Schedule a support call"],
        links: [
          {
            text: "Support page",
            url: "/support",
            type: "page",
          },
          {
            text: "Knowledge base",
            url: "/downloads",
            type: "page",
          },
        ],
      }
    }

    // Contact and sales queries
    if (
      lowerMsg.includes("contact") ||
      lowerMsg.includes("sales") ||
      lowerMsg.includes("quote") ||
      lowerMsg.includes("pricing") ||
      lowerMsg.includes("cost")
    ) {
      updateConversationContext("sales")
      return {
        id: (Date.now() + 1).toString(),
        text: "You can reach our sales team at info@senselive.io or call +91 9604070622. Our solutions are customized based on your specific requirements, so pricing varies. Would you like to discuss your project with a sales representative or get a customized quote?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Request a quote", "Schedule a consultation", "General pricing information"],
        links: [
          {
            text: "Contact page",
            url: "/contact",
            type: "page",
          },
          {
            text: "Submit inquiry",
            url: "/inquiry",
            type: "page",
          },
        ],
      }
    }

    // General inquiries based on current page
    if (currentPath.includes("/products")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "I see you're exploring our product offerings. Our IoT hardware is designed for reliability and ease of integration. Is there a specific product category or application you're interested in?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Wireless sensors", "IoT gateways", "Connectivity solutions", "Product selection guide"],
        links: [
          {
            text: "Featured products",
            url: "/products",
            type: "page",
          },
          {
            text: "Technical specifications",
            url: "/downloads",
            type: "page",
          },
        ],
      }
    }

    if (currentPath.includes("/solutions")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Our solutions are designed to address specific industry challenges while providing excellent ROI. Each solution combines our hardware with powerful software for comprehensive monitoring and control. Which industry or application area are you most interested in?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Energy management", "Water management", "Production monitoring", "Industry-specific solutions"],
        links: [
          {
            text: "All solutions",
            url: "/solutions",
            type: "page",
          },
          {
            text: "Case studies",
            url: "/downloads",
            type: "page",
          },
        ],
      }
    }

    if (currentPath.includes("/downloads")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "You're in our downloads center where you can find all our technical documentation. Is there a specific document or product information you're looking for?",
        sender: "bot",
        timestamp: new Date(),
        options: ["Product datasheets", "User manuals", "White papers", "Case studies"],
        links: [
          {
            text: "Latest documents",
            url: "/downloads",
            type: "page",
          },
          {
            text: "Technical support",
            url: "/support",
            type: "page",
          },
        ],
      }
    }

    // Contextual follow-up based on conversation history
    if (context.lastTopic && context.questionsAsked > 1) {
      if (context.lastTopic.includes("energy") || context.lastTopic.includes("ems")) {
        return {
          id: (Date.now() + 1).toString(),
          text: `Regarding energy management, ${getContextualFollowUp("energy")} Would you like more specific information about any aspect of our Energy Management System?`,
          sender: "bot",
          timestamp: new Date(),
          options: ["System components", "Implementation process", "ROI calculation", "Case studies"],
          links: [
            {
              text: "Energy Management Solution",
              url: "/solutions/ems",
              type: "page",
            },
          ],
        }
      }

      if (context.lastTopic.includes("water")) {
        return {
          id: (Date.now() + 1).toString(),
          text: `Regarding water management, ${getContextualFollowUp("water")} Would you like more specific information about any aspect of our Water Management Solution?`,
          sender: "bot",
          timestamp: new Date(),
          options: ["System components", "Implementation process", "ROI calculation", "Case studies"],
          links: [
            {
              text: "Water Management Solution",
              url: "/solutions/water-management",
              type: "page",
            },
          ],
        }
      }

      if (context.lastTopic.includes("documentation") || context.lastTopic.includes("datasheet")) {
        return {
          id: (Date.now() + 1).toString(),
          text: `Regarding documentation, ${getContextualFollowUp("documentation")} Is there a specific product line you're interested in?`,
          sender: "bot",
          timestamp: new Date(),
          options: ["Wireless sensors", "IoT gateways", "Energy management", "Water management"],
          links: [
            {
              text: "Downloads center",
              url: "/downloads",
              type: "page",
            },
          ],
        }
      }
    }

    // Default response for other queries
    return {
      id: (Date.now() + 1).toString(),
      text: "Thank you for your question. SenseLive offers comprehensive IoT solutions for industrial and commercial applications. Could you provide more details about your specific interests or requirements so I can give you the most relevant information?",
      sender: "bot",
      timestamp: new Date(),
      options: ["Product information", "Solution overview", "Technical documentation", "Contact sales"],
      links: [
        {
          text: "Browse our website",
          url: "/",
          type: "page",
        },
      ],
    }
  }

  const getContextualFollowUp = (topic: string): string => {
    const followUps: Record<string, string[]> = {
      energy: [
        "our system can help reduce energy costs by up to 30% through real-time monitoring and optimization.",
        "we offer both cloud-based and on-premises deployment options to suit your security requirements.",
        "the system integrates with existing BMS and SCADA systems for seamless implementation.",
      ],
      water: [
        "our solution can detect leaks as small as 0.5 liters per minute, significantly reducing water waste.",
        "the system provides real-time water quality monitoring including pH, turbidity, and contaminant detection.",
        "our analytics platform helps identify optimization opportunities across your water infrastructure.",
      ],
      documentation: [
        "all our documentation is available in PDF format and regularly updated with the latest information.",
        "we provide comprehensive installation guides, user manuals, and technical specifications for all products.",
        "our technical library includes application notes and best practices for optimal system performance.",
      ],
    }

    const options = followUps[topic] || followUps["energy"]
    return options[Math.floor(Math.random() * options.length)]
  }

  const handleOptionClick = (option: string) => {
    handleSendMessage(null, option)
  }

  const handleFeedback = (positive: boolean) => {
    setFeedbackGiven(positive)
    // In a real implementation, you would send this feedback to your server
    console.log(`User gave ${positive ? "positive" : "negative"} feedback`)
  }

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const renderLinkButton = (link: { text: string; url: string; type: string }) => {
    const icon =
      link.type === "document" ? (
        <Download className="h-4 w-4 mr-1" />
      ) : link.type === "external" ? (
        <ExternalLink className="h-4 w-4 mr-1" />
      ) : null

    return (
      <Link href={link.url} key={link.text} className="inline-block">
        <Button variant="outline" size="sm" className="text-xs flex items-center mt-2 mr-2">
          {icon}
          {link.text}
        </Button>
      </Link>
    )
  }

  return (
    <div className="fixed bottom-20 right-6 z-40">
      {/* Welcome popup */}
      {showWelcomePopup && !isOpen && (
        <div className="absolute bottom-20 right-0 w-72 bg-background rounded-lg shadow-premium overflow-hidden border border-border animate-scale-in p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-senselive flex items-center justify-center flex-shrink-0">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-sm">SenseAI</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Welcome to SenseLive! I can help you find products, documentation, or answer any questions about our IoT
                solutions.
              </p>
              <div className="flex gap-2 mt-3">
                <Button size="sm" className="text-xs bg-gradient-senselive text-white" onClick={toggleChat}>
                  Get assistance
                </Button>
                <Button size="sm" variant="outline" className="text-xs" onClick={() => setShowWelcomePopup(false)}>
                  Maybe later
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full p-0"
              onClick={() => setShowWelcomePopup(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      )}

      {/* Chat button */}
      <Button
        onClick={toggleChat}
        className={`rounded-full w-14 h-14 p-0 shadow-lg micro-bounce ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-gradient-senselive hover:shadow-premium-hover"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-background rounded-lg shadow-premium overflow-hidden border border-border animate-scale-in">
          {/* Chat header */}
          <div className="bg-gradient-senselive p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-white">SenseAI</h3>
              <p className="text-xs text-white/80">Intelligent IoT Assistant • Online</p>
            </div>
          </div>

          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3" aria-live="polite">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>

                  {/* Links */}
                  {msg.sender === "bot" && msg.links && msg.links.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">{msg.links.map((link) => renderLinkButton(link))}</div>
                  )}

                  {/* Quick reply options */}
                  {msg.sender === "bot" && msg.options && msg.options.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {msg.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="text-xs py-1 px-2 bg-background rounded-full hover:bg-primary/10 transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-muted">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <div
                      className="w-2 h-2 rounded-full bg-primary animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-primary animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Feedback section */}
          {messages.length > 1 && feedbackGiven === null && (
            <div className="px-4 py-2 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Is this conversation helpful?</span>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => handleFeedback(true)}
                  aria-label="Yes, this conversation is helpful"
                >
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => handleFeedback(false)}
                  aria-label="No, this conversation is not helpful"
                >
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Privacy info toggle */}
          {feedbackGiven !== null && (
            <div className="px-4 py-2 border-t border-border">
              <p className="text-xs text-muted-foreground">
                {feedbackGiven
                  ? "Thank you for your feedback! We're glad SenseAI was helpful."
                  : "Thank you for your feedback. We'll work to improve SenseAI."}
              </p>
            </div>
          )}

          {/* Privacy info button */}
          <div className="px-4 py-1 border-t border-border flex items-center justify-between">
            <button
              onClick={() => setShowPrivacyInfo(!showPrivacyInfo)}
              className="text-xs text-muted-foreground flex items-center"
            >
              <HelpCircle className="h-3 w-3 mr-1" />
              {showPrivacyInfo ? "Hide privacy info" : "Privacy info"}
            </button>
          </div>

          {/* Privacy info panel */}
          {showPrivacyInfo && (
            <div className="px-4 py-2 border-t border-border bg-muted/50">
              <p className="text-xs text-muted-foreground">
                SenseAI respects your privacy. Conversation data is only stored temporarily to improve your experience
                and is not shared with third parties. For more information, please see our{" "}
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          )}

          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow"
              aria-label="Message input"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!message.trim() || isTyping}
              className="bg-gradient-senselive hover:shadow-premium-hover"
              aria-label="Send message"
            >
              {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}

