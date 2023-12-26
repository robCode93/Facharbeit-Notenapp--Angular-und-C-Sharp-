using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace web_api.Migrations
{
    public partial class renewholidays : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FederalState",
                table: "Holidays",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FederalState",
                table: "Holidays");
        }
    }
}
