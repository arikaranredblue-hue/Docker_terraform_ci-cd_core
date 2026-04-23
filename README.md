# 🚀 Full CI/CD Docker Deployment on AWS EC2

This project demonstrates a **complete DevOps pipeline** for deploying a full-stack application using:

* 🐳 Docker & Docker Compose
* ☁️ AWS EC2
* 🔁 GitHub Actions (CI/CD)
* 🗄️ MariaDB
* 🌐 Nginx (Frontend)

---

## 📌 Architecture

```
GitHub Push → GitHub Actions → Docker Build → Docker Hub
                                      ↓
                                   EC2 Server
                                      ↓
                          Docker Compose Deployment
```

---

## ⚙️ Tech Stack

* **Frontend:** Nginx (Static Hosting)
* **Backend:** Node.js (Express)
* **Database:** MariaDB
* **CI/CD:** GitHub Actions
* **Containerization:** Docker

---

## 🧱 Services

| Service  | Description                      |
| -------- | -------------------------------- |
| frontend | Nginx container (port 80 → 8080) |
| backend1 | Node.js backend instance         |
| backend2 | Node.js backend instance         |
| mariadb  | Database container               |

---

## 🔄 CI/CD Pipeline Flow

1. Push code to `main`
2. GitHub Actions:

   * Builds Docker images
   * Pushes to Docker Hub
3. Copies `docker-compose.yml` to EC2
4. SSH into EC2:

   * Installs Docker & Compose
   * Pulls latest images
   * Runs containers

---

## 📦 Docker Compose

```bash
docker compose up -d
```

---

## 🔐 Environment Variables

Managed securely using GitHub Secrets:

* DB credentials
* EC2 SSH key
* Docker Hub credentials

---

## 🚀 Deployment

Application is deployed on:

```
http://<EC2-PUBLIC-IP>:8080
```

---

## 🛠️ Key Features

* Multi-container architecture
* Automated deployment pipeline
* Load-ready backend structure
* Secure environment handling
* Scalable design

---

## 📚 Learning Outcomes

This project demonstrates:

* Real-world DevOps workflow
* Container orchestration
* CI/CD automation
* Cloud deployment

---

## 🧠 Future Improvements

* Nginx Load Balancer (backend1 + backend2)
* Health checks & auto-restart
* Zero downtime deployment
* Terraform full automation

---

## 👨‍💻 Author

**ARIKARAN**

---
