# Step 1: Use an official lightweight Python image
FROM python:3.10-slim

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the dependencies file and install them
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Step 4: Copy the rest of the application code
COPY . .

# Step 5: Expose the port the app runs on
EXPOSE 5000

# Step 6: Define the command to run the application
CMD ["python", "app.py"]
