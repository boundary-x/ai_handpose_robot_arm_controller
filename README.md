# 🦾 Boundary X - AI Hand Pose Robot Arm Controller

**Boundary X - AI Hand Pose Robot Arm Controller** is a web-based application that controls a 4-axis robot arm in real-time using hand gestures.

Powered by **Google MediaPipe Hand Landmarker**, it tracks the user's hand coordinates via webcam and converts them into servo angles. These angles are transmitted to a **BBC Micro:bit** (or compatible hardware) via **Web Bluetooth (BLE)** to physically drive the robot arm.

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Platform](https://img.shields.io/badge/Platform-Web-blue)
![Tech](https://img.shields.io/badge/Stack-MediaPipe%20%7C%20Web%20Bluetooth-00E676)

## ✨ Key Features

### 1. 🖐 Real-time Hand Tracking (Avatar Mode)
- **MediaPipe Integration:** Uses the high-performance `HandLandmarker` to detect hand keypoints directly in the browser.
- **Intuitive Control:** Maps hand spatial movements to robot arm joints:
    - **Base (Left/Right):** Mapped to hand's X-axis position.
    - **Shoulder (Distance):** Mapped to the distance of the hand from the camera (Depth/Size).
    - **Elbow (Up/Down):** Mapped to hand's Y-axis position.
    - **Gripper (Grab):** Triggered by pinching the Thumb and Index finger.

### 2. 🎛 Custom Calibration & Safety
- **Range Limit:** Users can set **Min/Max angles** for each servo (e.g., 0°~180°) to prevent hardware damage.
- **Reverse Mode:** Includes a **"Reverse" checkbox** for each joint to invert the direction of movement if the physical motor is mounted in the opposite orientation.
- **Smoothing:** Applies a moving average filter (`FILTER_SIZE = 3`) to reduce jitter and ensure smooth robot movement.

### 3. 🔗 Wireless Connectivity (BLE)
- **Direct Connection:** Connects to **BBC Micro:bit** using the **Nordic UART Service** without installing extra software.
- **Packet Optimization:** Only sends data when changes exceed a threshold (`MIN_CHANGE`), reducing latency and bandwidth usage.

---

## 📡 Communication Protocol

The app transmits a formatted string packet via Bluetooth UART. Each packet contains the angles for all 4 servos, padded to 3 digits, followed by a carriage return and newline (`\r\n`).

**Data Format:**
```text
B{Base}S{Shoulder}E{Elbow}G{Gripper}\r\n
```

**Parameters:**
- **B (Base):** 000 ~ 180 (degrees)
- **S (Shoulder):** 000 ~ 180 (degrees)
- **E (Elbow):** 000 ~ 180 (degrees)
- **G (Gripper):** 000 (Close) or 001 (Open)

**Examples:**
- **Standard position (all 90°), Gripper Open:** `B090S090E090G001`
- **Base rotated left (45°), Gripper Closed:** `B045S090E090G000`

---

## 📡Tech Stack
- **Frontend:** HTML5, CSS3
- **AI Engine:** MediaPipe Tasks Vision (Hand Landmarker)
- ** Connectivity:** Web Bluetooth API

--- 

## 📝 License
- Copyright © 2024 Boundary X Co. All rights reserved.
- All rights to the source code and design of this project belong to BoundaryX.
- Web: boundaryx.io
- Contact: https://boundaryx.io/contact
