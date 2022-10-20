using Microsoft.EntityFrameworkCore;
using web_api.Models;
using web_api.Services;
using web_api.Services.ServiceInterfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DbContext und ConectionString hinzufügen
builder.Services.AddDbContext<WebAppContext>(x => x.UseSqlServer(builder.Configuration.GetConnectionString("ConStr")));

// Interfaces und Klassen verbinden
builder.Services.AddScoped<IGradService, GradService>();
builder.Services.AddScoped<IHolidayService, HolidayService>();
builder.Services.AddScoped<ISchoolYearService, SchoolYearService>();
builder.Services.AddScoped<ISchoolService, SchoolService>();
builder.Services.AddScoped<ISubjectService, SubjectService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
