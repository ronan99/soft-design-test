FROM --platform=$BUILDPLATFORM node:17.0.1-bullseye-slim as builder

RUN mkdir /app
WORKDIR /app

RUN npm install -g @angular/cli@16


COPY package.json package-lock.json ./
RUN npm i

COPY . .

RUN useradd -s /bin/bash -m vscode && \
  groupadd docker && \
  usermod -aG docker vscode

CMD ["ng", "serve", "--host", "0.0.0.0", "--watch", "--proxy-config", "proxy.conf.json"]
