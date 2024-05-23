FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/x10.Web.Host/x10.Web.Host.csproj", "src/x10.Web.Host/"]
COPY ["src/x10.Web.Core/x10.Web.Core.csproj", "src/x10.Web.Core/"]
COPY ["src/x10.Application/x10.Application.csproj", "src/x10.Application/"]
COPY ["src/x10.Core/x10.Core.csproj", "src/x10.Core/"]
COPY ["src/x10.EntityFrameworkCore/x10.EntityFrameworkCore.csproj", "src/x10.EntityFrameworkCore/"]
WORKDIR "/src/src/x10.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/x10.Web.Host", "src/x10.Web.Host"]
COPY ["src/x10.Web.Core", "src/x10.Web.Core"]
COPY ["src/x10.Application", "src/x10.Application"]
COPY ["src/x10.Core", "src/x10.Core"]
COPY ["src/x10.EntityFrameworkCore", "src/x10.EntityFrameworkCore"]
WORKDIR "/src/src/x10.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "x10.Web.Host.dll"]
