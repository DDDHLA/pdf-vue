export function usePDFViewer() {
  return {
    data() {
      return {
        file: null,
        numPages: 0,
        currentPage: 1,
        scale: 1.0,
        rotation: 0,
        viewMode: "single", // 'single' | 'double' | 'scroll'
        sidebarVisible: true,
        pageDimensions: null,
      };
    },
    methods: {
      // 文件上传处理
      handleFileUpload(uploadedFile) {
        this.file = uploadedFile;
        this.currentPage = 1;
        this.scale = 1.0;
        this.rotation = 0;
      },

      // 文档加载完成
      onDocumentLoadSuccess(pdf) {
        this.numPages = pdf.numPages;
        this.currentPage = 1;
      },

      // 页面导航
      goToPage(page) {
        if (page >= 1 && page <= this.numPages) {
          this.currentPage = page;
        }
      },

      goToFirstPage() {
        this.currentPage = 1;
      },

      goToPrevPage() {
        this.currentPage = Math.max(this.currentPage - 1, 1);
      },

      goToNextPage() {
        this.currentPage = Math.min(this.currentPage + 1, this.numPages);
      },

      goToLastPage() {
        this.currentPage = this.numPages;
      },

      // 缩放控制
      zoomIn() {
        this.scale = Math.min(this.scale + 0.2, 3.0);
      },

      zoomOut() {
        this.scale = Math.max(this.scale - 0.2, 0.3);
      },

      resetZoom() {
        this.scale = 1.0;
      },

      setCustomScale(newScale) {
        this.scale = newScale;
      },

      // 适应控制
      fitWidth(containerWidth, pageWidth) {
        if (containerWidth && pageWidth) {
          this.scale = containerWidth / pageWidth;
        }
      },

      fitHeight(containerHeight, pageHeight) {
        if (containerHeight && pageHeight) {
          this.scale = containerHeight / pageHeight;
        }
      },

      fitPage(containerWidth, containerHeight, pageWidth, pageHeight) {
        if (containerWidth && containerHeight && pageWidth && pageHeight) {
          const scaleX = containerWidth / pageWidth;
          const scaleY = containerHeight / pageHeight;
          this.scale = Math.min(scaleX, scaleY);
        }
      },

      // 旋转控制
      rotatePage() {
        this.rotation = (this.rotation + 90) % 360;
      },

      // 下载 PDF
      downloadPDF() {
        if (this.file) {
          const url = URL.createObjectURL(this.file);
          const a = document.createElement("a");
          a.href = url;
          a.download = this.file.name;
          a.click();
          URL.revokeObjectURL(url);
        }
      },
    },
  };
}
