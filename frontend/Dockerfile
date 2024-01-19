FROM --platform=$BUILDPLATFORM node:17.0.1-bullseye-slim as builder

RUN mkdir /app
WORKDIR /app

RUN npm install -g @angular/cli@16


COPY package.json package-lock.json ./
RUN npm i

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--watch", "--proxy-config", "proxy.conf.json"]

FROM builder as dev-envs


RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF

CMD ["ng", "serve", "--host", "0.0.0.0", "--watch", "--proxy-config", "proxy.conf.json"]
