from __future__ import annotations

from pathlib import Path

from rembg import remove


def main() -> None:
    project_root = Path(__file__).resolve().parents[1]
    inp = project_root / "profile.png"
    outp = project_root / "profile-cutout.png"

    input_bytes = inp.read_bytes()
    output_bytes = remove(input_bytes)
    outp.write_bytes(output_bytes)


if __name__ == "__main__":
    main()

