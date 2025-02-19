import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Card, CardContent, Typography, Paper } from "@mui/material";

export default function RichTextEditor() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("richTextData");
    if (savedData) setContent(savedData);
  }, []);

  const handleChange = (value: string) => {
    setContent(value);
    localStorage.setItem("richTextData", value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Card
        sx={{
          maxWidth: 800,
          width: "100%",
          boxShadow: 4,
          borderRadius: 3,
          background: "white",
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Rich Text Editor ✍️
          </Typography>
          <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
            <ReactQuill
              value={content}
              onChange={handleChange}
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["clean"],
                ],
              }}
              style={{
                backgroundColor: "white",
                minHeight: "200px",
                borderRadius: "5px",
              }}
            />
          </Paper>

          <Box
            sx={{
              mt: 3,
              padding: 2,
              border: "1px solid #ddd",
              borderRadius: 2,
              backgroundColor: "#fafafa",
              boxShadow: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", mb: 1, color: "#444" }}
            >
              Preview 📄
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
