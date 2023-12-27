using web_api.Models;
using web_api.Services;
using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using web_api.Services.ServiceInterfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DbContext und ConectionString hinzufügen
builder.Services.AddDbContext<SchoolGradContext>(x => x.UseNpgSql(builder.Configuration.GetConnectionString("ConStr")));

// Interfaces und Klassen verbinden
builder.Services.AddScoped<IGradService, GradService>();
builder.Services.AddScoped<ISchoolService, SchoolService>();
builder.Services.AddScoped<ISubjectService, SubjectService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(c => c.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().Build());
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
