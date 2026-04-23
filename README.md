# 🚀 Full Stack DevOps Deployment Pipeline (AWS + Docker + CI/CD)

## 📌 Overview

This project is a production-style DevOps implementation where a multi-tier application is deployed on AWS using Infrastructure as Code, containerization, and CI/CD automation.

The system follows a real-world architecture pattern with:

- Custom Nginx-based frontend setup
- Node.js backend with load balancing (upstream configuration)
- Python-based database service layer
- Dockerized services deployed via Docker Compose
- Fully automated CI/CD pipeline for deployment on EC2

---

## 🏗️ System Architecture

### 🔹 Frontend Layer
- Built using **Nginx**
- Custom `nginx.conf` configuration
- Serves static frontend content efficiently
- Acts as entry point for the application

### 🔹 Backend Layer
- Built using **Node.js**
- Load balancing implemented using **Nginx upstream**
- Multiple backend containers for high availability

### 🔹 Database Layer
- Python-based service layer (database interaction/logic layer)
- Containerized and managed via Docker

---

## ☁️ Infrastructure (AWS + Terraform)

- AWS EC2 instance provisioned using Terraform
- Remote state stored in **S3**
- State locking enabled using **DynamoDB**
- Fully reproducible infrastructure setup

---

## 🐳 Containerization (Docker)

All services are containerized:

- Frontend → Nginx container (custom config)
- Backend → Node.js API containers (load balanced)
- Database layer → Python service container

Managed using:

```bash
docker compose up -d