FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

WORKDIR /app

# Copy csproj and restore as distinct layers
COPY HW_M6P1_API.sln ./
COPY HW_M6P1_API/*.csproj ./HW_M6P1_API/

RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish HW_M6P1_API.sln -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0

ENV ASPNETCORE_URLS=http://*:8080
ENV ASPNETCORE_ENVIRONMENT=Development

USER 1000

WORKDIR /app
COPY --from=build-env /app/out .

EXPOSE 8081
ENTRYPOINT ["dotnet", "HW_M6P1_API.dll"]